import { createContext, useContext , useState } from "react";
import axios from "../Api/axios";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [errors ,setErrors] = useState([]);
    const navigate = useNavigate();
    const csrf = () => axios.get('/sanctum/csrf-cookie');
    const getUser = async () => {
        await csrf();
        const { data } = await axios.get('/api/user')
        console.log(data)
        setUser(data)
    }

    const login = async ({...data}) => {
       
        try {
            // Ask for csrf cookie
            await csrf();
        
            // Attempt to authenticate
             await axios.post('/login', data);
             
            
             await getUser();
             console.log(getUser())
            navigate("/"); 
           getUser();
            
        
          } catch (e) {
            if (e.response && e.response.status === 422) {
              const errors = e.response.data.errors;
              setErrors(errors); 
              console.log(errors);
            }
          }

    }

    const register = async ({...data }) => {
        try {
            await csrf(); 
               
                    await axios.post('/register',  data);
                      await getUser();
                      navigate("/"); 

        } catch (e) {
            if (e.response && e.response.status === 422) {
                const errors = e.response.data.errors;
                setErrors(errors); 
                console.log(errors);
              }
            
        } 


    }


    return <AuthContext.Provider value ={{ user, errors ,getUser ,login , register }}>
                {children}
           </AuthContext.Provider>


   
}


export default function useAuthContext(){
    return useContext(AuthContext);
};