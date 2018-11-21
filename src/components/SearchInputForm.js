  import React from 'react';
 
  const SearchInputForm = () => {
      return (
          <form>
              <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Recipient's username"
                         aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">@example.com</span>
                      </div>
              </div>
          </form>
      )
  };
 
  export default SearchInputForm;