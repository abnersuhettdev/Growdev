export const emailValidator = (email: string): boolean => {
    if(!email) {
      return false
    }

    if(email.length > 50) {
      return false
    }

    return true
}

export const passwordValidator = (password: string): boolean => {
  if(!password) {
    return false
  }
  
  if(password.length < 3) {
    return false
  }

  return true
}