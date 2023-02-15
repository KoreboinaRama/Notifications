const Notification = props => {
  //  Write your code here.
  const {containerClassName,imgUrl,message}=props;
  
      const containerClassName={`notification-container ${className}`};
      return(
        <div className={containerClassName}>
            <img className="icon" src={imgUrl} />
            <p className="message">{message}</p>
        </div>

      
  )}
const element=(
    <div className="container">
        <h1 className="title">Notifications</h1>
        <div className="containerClassName">
            <Notification className="info-cont" imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" message="Information Message" />
             <Notification className="success-cont" imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" message="Success Message" />
              <Notification className="warn-cont" imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" message="Warning Message" />
               <Notification className="dang-cont" imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" message="Danger Message" />
        
        </div>
    </div>

);

ReactDOM.render(element, document.getElementById('root'))
