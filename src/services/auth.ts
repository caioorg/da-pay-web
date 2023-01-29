import axios from 'axios'

export default class Auth {
  public static async authenticated(username: string, password: string): Promise<{ access_token: string } | null> {
    try {
      const { data: { access_token } } = await axios.post<{ access_token: string }>('http://localhost:3000/auth/login', {
        username,
        password
      })

      return { access_token }
    } catch (error) {
      console.log(error)
      return null
    }
  }

  public static async create(username: string, password: string, name: string): Promise<{ created: boolean } | null> {
    try {
      const { data: { created }, status } = await axios.post<{ created: boolean }>('http://localhost:3000/auth/signup', {
        username,
        password,
        name
      })

      return { created }
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
