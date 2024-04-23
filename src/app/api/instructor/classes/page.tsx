<Header title={"Dashboard"} userImg={"bg-[url('/avatar.jpg')]"} status={status == "loading"}/>

<ButtonIcon color="bg-palette-sea-green" icon={<MdOutlineGroupAdd color="white" size={23} />} title={"Nova turma"} colorHover={'hover:bg-palette-sea-greenDark'} onClick={() => setShowModal(true)} />

<Modal isVisible={showModal} onClose={() => setShowModal(false)} title="Teste">
    <form action="" className="p-8 py-4 flex items-center flex-col justify-center">
        <FormInput value={text} onChange={setText} labelColor="palette-sea-green" labelText="Digital Solutions" type="text" />
    </form>
</Modal>
