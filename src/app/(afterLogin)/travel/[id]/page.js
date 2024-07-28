import ModalDetail from "@/components/Modal/modalDetail";

export default function DetailTravelPage({travel, onClose}) {
    return (
        <div>
            <ModalDetail travel={travel} onClose={onClose}/>
        </div>
    )
}