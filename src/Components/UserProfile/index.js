const UserProfile = props => {
  const {userDetails} = props
  const {imageurl, name, role} = userDetails
  return (
    <div className="user-card-container">
      <img src={imageurl} />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </div>
  )
}
export default UserProfile;
