import { POST } from "../../../constants/http";

export const uploadImage = async (ev: React.FormEvent<HTMLFormElement>) => {
  const form = ev.currentTarget;
  const fileInput: any = Array.from(form.elements).find(
    (element: any) => element.name === "file"
  );

  const formData = new FormData();

  for (const file of fileInput.files) {
    formData.append("file", file);
  }
  formData.append(
    "upload_preset",
    `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}`
  );

  const data = await fetch(`${process.env.REACT_APP_CLOUDINARY_URL}`, {
    method: POST,
    body: formData,
  }).then((res) => res.json());

  return data.secure_url;
};
