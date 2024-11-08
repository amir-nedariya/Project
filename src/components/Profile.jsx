function Profile(){
    return(
        <div>
            <h1>Profile card chalenge</h1>
            <ProfileCard
            name="Amir"
            age={30}
            greeting={
                <div>
                    <strong>hi Amir, have Wonder day;</strong>
                </div>
          
    }
  >
    <p>hobis:gaming ,cooking</p>
    <button>contant</button>
    </ProfileCard>   
    
    <ProfileCard
    name="bob"
    age={25}
    greeting={
        <div>
            <strong>hi Amir, have Wonder day;</strong>
        </div>
  
}
>
<p>hobis:gaming ,cooking</p>
<button>contant</button>
</ProfileCard>   
</div>
    )
}


export default Profile

function ProfileCard({name,age,greeting,children}){
    // const {name,age,greeting,children} = props;
    return(
        <>
         <h2>Name:{name}</h2>
         <p>Age:{age}</p>
         <p>{greeting}</p>
         <div>{children}</div>
        </>
    );
};
