import React, { useState } from "react";
import { X } from "lucide-react";

const LandForm = ({ onSubmit, onClose, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      price: "",
      lots: "",
      location: "",
      images: [],
      video: "",
    }
  );

  const [selectedImages, setSelectedImages] = useState([]);
  const maxImages = 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: formData.id || Date.now(),
    });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (selectedImages.length + files.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images`);
      return;
    }

    // Preview images
    const newImages = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prev) => [...prev, ...newImages]);

    // Store files in formData
    setFormData((prev) => ({
      ...prev,
      images: [...(prev.images || []), ...files],
    }));
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 scroll no-scrollbar">
      <div
        className="fixed inset-0 bg-gray-600/25 backdrop-blur-[2px] transition-all"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl relative  w-auto">
          <X size={24} onClick={onClose} className="ml-auto" />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col-reverse gap-4">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      required
                      placeholder="Name of Property"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      required
                      placeholder="Price of Property"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lots"
                      value={formData.lots}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      required
                      placeholder="Number of Lots"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                      required
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    rows="3"
                    required
                    placeholder="Descriptions"
                  />
                </div>
              </div>

              <div className="flex w-full gap-2 flex-col md:flex-row">
                <div className=" flex flex-col p-4 bg-[#D9D9D9] w-[260px] h-[340px] justify-center items-center">
                  <label className="text-sm font-medium text-gray-700 ">
                    Upload Video
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setFormData((prev) => ({
                          ...prev,
                          video: file,
                        }));
                      }
                    }}
                    className="mt-1 block w-full "
                  />
                  {formData.video && (
                    <div className="mt-2 p-2 border rounded">
                      <p className="text-sm">
                        Video selected: {formData.video.name}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <div
                        key={index}
                        className="relative bg-[#D9D9D9] px-12 py-7.5"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const newImages = [...selectedImages];
                              newImages[index] = URL.createObjectURL(file);
                              setSelectedImages(newImages);

                              const newFormImages = [
                                ...(formData.images || []),
                              ];
                              newFormImages[index] = file;
                              setFormData((prev) => ({
                                ...prev,
                                images: newFormImages,
                              }));
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer object-cover"
                        />
                        {selectedImages[index] ? (
                          <div className="relative">
                            <img
                              src={selectedImages[index]}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-32 object-cover rounded"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newImages = [...selectedImages];
                                newImages[index] = null;
                                setSelectedImages(newImages);

                                const newFormImages = [
                                  ...(formData.images || []),
                                ];
                                newFormImages[index] = null;
                                setFormData((prev) => ({
                                  ...prev,
                                  images: newFormImages,
                                }));
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Image {index + 1}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">
                                Click to upload
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C1669] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Add Listing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandForm;
