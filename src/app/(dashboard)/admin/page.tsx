import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            {/* left */}
            <div className="w-full lg:w-2/3">
            {/* usercards */}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parent"/>
                <UserCard type="staff"/>
            </div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    )
}

export default AdminPage;