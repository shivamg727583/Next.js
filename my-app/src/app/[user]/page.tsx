function page({params}:{params:{user:string}}) {
       const {user} = params;
    console.log('user', user)
  return (
    <div>{user} page</div>
  )
}

export default page