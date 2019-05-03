export const createProfileTypes = {
    CREATEPROFILE_UPDATE: 'CREATEPROFILE_UPDATE',
    CREATEPROFILE_FAILED: 'CREATEPROFILE_FAILED'
  }
  
  export const updateProfile = (username: string, email: string, user_password: string, firstname: string, lastname: string) => async (dispatch) => {

    try {
    const resp = await fetch('http://localhost:8081/user', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({username, email, user_password, firstname, lastname}),
        headers: {
          'content-type': 'application/json'
    }
    })
    if (resp.status === 401) {
        dispatch({
            type: createProfileTypes.CREATEPROFILE_FAILED
        })
    } else if ( resp.status === 200) {
        console.log(resp)
        console.log('Insert was successful');
    } else {
        dispatch({
            type: createProfileTypes.CREATEPROFILE_UPDATE
            })
    }
  } catch (err) {
      console.log('Failed' + err);
  }
}