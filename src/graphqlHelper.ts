import axios from 'axios'

export const sendQuery = (query: any, variables?: any): Promise<any> => {
  return axios.post('http://192.168.1.46:4000/graphql?', {
    query,
  })
}

export const getAdsQuery = () => {
  return `{
        ads{id,title, body, photos{url, info, isPrimary}, username}
      }`
}

export const getCategoriesQuery = () => {
  return `{
          categories{id,title,description}
      }`
}
export const registerMutation = (
  username: string,
  password: string,
  email: string,
  confirmPassword: string,
  role: string
) => {
  return `mutation{register(registerInput:{username:"${username}", password:"${password}", confirmPassword:"${confirmPassword}",email:"${email}", role:"${role}"}){id,createdAt,email,username, token}}`
}

export const loginMutation = (username: string, password: string) => {
  return `mutation{login(username:"${username}", password:"${password}"){id,createdAt,email,username, token}}`
}
