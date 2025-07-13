function page({params} : {params:{user:string}}) {
     const { user } = params;
     throw Error("This is a custom error message for testing purposes.");
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Hello, {user}!</h1>
      <p className="text-lg">Welcome to your profile page.</p>
      <p className="text-md mt-2">Here you can view and edit your profile information.</p>
      <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
        <h1 className="text-xl font-bold">Profile Page</h1>
        <p className="text-md">User: {user}</p>
        <p className="text-md" >This is the profile page for the {user}.</p>
        {/* Additional profile details can be added here */}
    </div>
    </div>
  )

}

export default page