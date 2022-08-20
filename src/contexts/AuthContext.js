import { createContext, useState, useEffect, useContext } from "react";
import { Alert } from "react-native";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
  }, []);

  const fetchUser = async ()=>{
    try{

      const results = await DataStore.query(User,(user)=>user.sub('eq',sub))
      setDbUser(results[0])
    }catch(err){
      Alert.alert('Error',error.message)
    }
  }
  useEffect(() => {
   fetchUser()
  }, [sub]);

  return (
    <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
