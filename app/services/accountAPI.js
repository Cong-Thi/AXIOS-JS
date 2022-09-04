function apiGetAccounts(searchTerm) {
    return axios({
           url: "https://62f50939535c0c50e76847f6.mockapi.io/education",
           method: "GET",
           params: {
               name: searchTerm
           }
       });
   }
 
   function apiAddAccount(account) {
       return axios({
              url: "https://62f50939535c0c50e76847f6.mockapi.io/education",
              method: "POST",
              data: account,
          });
      }
   
      function apiDeleteAccount(accountID) {
       return axios({
              url: `https://62f50939535c0c50e76847f6.mockapi.io/education/${accountID}`,
              method: "DELETE",
          });
      }
   
      function apiGetAccountById(accountID) {
       return axios({
              url: `https://62f50939535c0c50e76847f6.mockapi.io/education/${accountID}`,
              method: "GET",
          });
      }
   
      function apiUpdateAccount(accountID, account) {
       return axios({
              url: `https://62f50939535c0c50e76847f6.mockapi.io/education/${accountID}`,
              method: "PUT",
              data: account,
          });
      }

     
   
   