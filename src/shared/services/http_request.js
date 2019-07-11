import axios from 'axios';
export default {
    get: (url, props) => {
        return new Promise((resolve, reject)=>{
           axios.get(url).then(({ data }) => {
                if (data.success) {
                    resolve(data)
                } else if (!data.isLoggedIn) {
                    props.history.push('/');
                } else {
                    alert('something blew up');
                }
            })
        })
    },
    post: (url, props, data) => {
        debugger
        return new Promise((resolve, reject)=>{
            axios.post(url, data).then(({ data }) => {
                 if (data.success) {
                     resolve(data)
                 } else if (!data.isLoggedIn) {
                     props.history.push('/');
                 } else {
                     alert('something blew up');
                 }
             })
         })
    },
    put: (url, props, data) => {
        return new Promise((resolve, reject)=>{
            axios.put(url, data).then(({ data }) => {
                 if (data.success) {
                     resolve(data)
                 } else if (!data.isLoggedIn) {
                     props.history.push('/');
                 } else {
                     alert('something blew up');
                 }
             })
         })
    },
    delete: (url, props) => {
        return new Promise((resolve, reject)=>{
            axios.delete(url).then(({ data }) => {
                 if (data.success) {
                     resolve(data)
                 } else if (!data.isLoggedIn) {
                     props.history.push('/');
                 } else {
                     alert('something blew up');
                 }
             })
         })
    },
}