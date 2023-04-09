import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";

function PostEditModal({ el, handleSubmit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [form, setForm] = useState(el);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <BiEdit onClick={onOpen} color="blue" fontSize={"25px"} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Heading mb="15px" textAlign={"center"}>
            Edit Form
          </Heading>
          <FormControl w="90%" m="auto">
            <FormLabel>Content</FormLabel>
            <Textarea
              minLength={1}
              maxLength={50}
              mb="20px"
              name="content"
              id="name"
              value={form.content}
              onChange={handleChange}
            />
            <Input
              type="submit"
              display={"block"}
              w="50%"
              m={"auto"}
              background={"teal"}
              color="white"
              fontSize={20}
              onClick={() => {
                handleSubmit(el._id, form);
                onClose();
              }}
            />
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostEditModal;
