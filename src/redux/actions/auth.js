import axios from 'axios';
import Swal from 'sweetalert2'

export const login = (formData, history) => async () => {
        await axios.post('http://localhost:8000/adminAccount/login', formData)
        .then(res=> {
            localStorage.setItem('menagerie', res.data.token)
            localStorage.setItem('admin', JSON.stringify(res.data.admin))
            
            Swal.fire(
                'Welcome',
                'success'
              )
              setTimeout(() => {
                  history.push('/dashboard/dashboard')
              }, 2000)
        })
        .catch(err=>{
            if(err.message === "Request failed with status code 500"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Akun tidak ditemukan!',
                    footer: '<a href>Why do I have this issue?</a>'
                  })
            } else if(err.message === "Request failed with status code 400"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password salah!',
                    footer: '<a href>Why do I have this issue?</a>'
                  })
            }
        })

}

export const logout = (history) => async () => {
    localStorage.removeItem("menagerie");
    localStorage.removeItem("admin");
    history.push("/");
};