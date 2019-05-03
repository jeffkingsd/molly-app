export const claimTypes = {
    CLAIM_UPDATE: 'CLAIM_UPDATE',
    FAILED_UPDATE: 'CLAIM_FAILED'
  }
  
  export const insertClaim = (author: number, amount: number, description: string, type: number) => async (dispatch) => {
    try {
    await fetch('http://localhost:8081/reimbursements', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({author, amount, description, type}),
        headers: {
          'content-type': 'application/json'
    }
    })
  } catch (err) {
      console.log('Failed' + err);
  }
  
}