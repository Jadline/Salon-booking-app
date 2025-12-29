import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { HiTrash, HiExclamationCircle } from "react-icons/hi";

export default function DeleteClientModal({ userId }) {
  const [isOpen, setOpen] = useState(false);

  const handleDelete = () => {
    console.log(`Deleting user with ID: ${userId}`);
    setOpen(false);
  };

  return (
    <>
      <Button  onClick={() => setOpen(true)}>
        <HiTrash className="text-lg" />
      </Button>

      <Modal
        show={isOpen}
        size="md"
        onClose={() => setOpen(false)}
        popup
        className="backdrop-blur-sm"
      >
        <div className="bg-[#923982] dark:bg-[#923982] rounded-xl p-6 shadow-lg">
          <ModalHeader>
            <span className="text-white text-lg font-semibold">Delete Client</span>
          </ModalHeader>

          <ModalBody>
            <div className="flex flex-col items-center gap-y-6 text-center">
              <HiExclamationCircle className="text-7xl text-red-500" />
              <p className="text-white/90 text-xl">
                Are you sure you want to delete this user?
              </p>
            </div>
          </ModalBody>

          <ModalFooter className="flex justify-center gap-x-3">
            <Button className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleDelete}>
              Yes, I'm sure
            </Button>
            <Button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={() => setOpen(false)}>
              No, cancel
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}
