"use client";

import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Label, TextInput, Select } from "flowbite-react";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function EditClientModal({ client }) {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    specialRequests: client?.specialRequests || "",
    status: client?.status || "Non-Attended",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    console.log("Updated booking:", formData);
    setIsOpen(false);
    // TODO: send formData to backend or update state
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <HiOutlinePencilAlt className="text-lg" />
      </Button>

      <Modal 
        show={isOpen} 
        size="md" 
        onClose={() => setIsOpen(false)}
        popup
        className="backdrop-blur-sm"
      >
        {/* Wrap modal content in a styled div */}
        <div className="bg- dark:bg-[#923982] rounded-xl p-6 shadow-lg">
          <ModalHeader>Edit Client</ModalHeader>

          <ModalBody>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
              {/* Read-only fields */}
              {["fullname", "email", "phoneNumber", "preferredStylist", "bookingDate"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field}>{field.replace(/([A-Z])/g, " $1")}</Label>
                  <TextInput
                    id={field}
                    value={client[field]}
                    readOnly
                    className="mt-1 "
                  />
                </div>
              ))}

              {/* Editable fields */}
              <div>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <TextInput
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="mt-1"
                >
                  <option>Attended</option>
                  <option>Non-Attended</option>
                </Select>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleSave}>Edit Client</Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}
