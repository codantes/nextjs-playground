import { useRouter } from "next/router";

const profile = () => {
    const router = useRouter();
    const {userId} = router.query
    console.log(userId);
    return(
        <section>
            <h1> this is a user profile of {userId} </h1>
        </section>
    )
}

export default profile;