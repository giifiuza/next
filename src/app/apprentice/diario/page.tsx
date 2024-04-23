'use client';

import Header from "@/components/Header";
import Register from "@/components/RegisterCard";

const Diario = () => {
    const registerData = [
        { id: 1, title: 'Registro 1', content: 'Conteúdo do registro 1' },
        { id: 2, title: 'Registro 2', content: 'Conteúdo do registro 2' },
        { id: 3, title: 'Registro 3', content: 'Conteúdo do registro 3' }
    ];

    return (
        <>
            <Header title={"Diario"} userImg={"bg-[url('/avatar.jpg')]"} />
            <div></div>
            {registerData.map((data) => (
                <Register key={data.id} title={data.title} content={data.content} />
            ))}
        </>
    );
}

export default Diario;
