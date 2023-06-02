import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_image_upload_Key
  }`;
  const onSubmit = data => {
    data.price = parseFloat(data.price);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageUploadUrl, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          data.image = imgData.data.display_url;
          fetch("http://localhost:5000/menu/add", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(data),
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.acknowledged) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Menu added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
    // console.log(data);
  };
  return (
    <div>
      <SectionTitle title="Add an item" subHeading="What's new" />
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600 font-bold mt-2">
                Name is required
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select category</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue="default"
                {...register("category")}
              >
                <option value="default" disabled>
                  Please select
                </option>
                <option value="salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                {...register("price")}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
              {...register("recipe")}
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image")}
            />
          </div>
          <input
            type="submit"
            value="Add item"
            className="btn btn-primary mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
