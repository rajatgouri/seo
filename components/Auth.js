import { useRouter } from 'next/router'


const withAuth = (WrappedComponent) =>{
    return(props)=>{
        if(typeof window !== 'undefined'){
            const router = useRouter()
            const accessToken = localStorage.getItem('authToken')


            if(!accessToken){
                router.replace('/')
                return null
            }

            return <WrappedComponent {...props} />
        }
        return null
    }
}

export default withAuth