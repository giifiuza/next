import Header from "@/components/Header";
import TasksCard from "@/components/Tasks";

const Tasks = () => {
    return (
        <>
            <Header title={"Tasks"} userImg={"bg-[url('/avatar.jpg')]"} status={false} />

            <TasksCard />
        </>
    );
}

export default Tasks;