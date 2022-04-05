export const auth = {
    CHECK_CREDENTIALS: 'CHECK_CREDENTIALS',
  }
  
  export const check_credentials = data  => {
    return {
      type: auth.CHECK_CREDENTIALS,
      payload: data,
    }
  }
  