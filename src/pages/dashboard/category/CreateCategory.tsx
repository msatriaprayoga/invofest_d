import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/FormInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/Button";

type FormData = {
  Name : string;
};

const schema = z.object({
  Name: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

export default function CreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-700">
        Create Category
      </h1>
      <p className="mb-6 text-gray-600">
        Lengkapi form berikut untuk membuat kategori baru.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white shadow-lg rounded-xl p-8 border border-gray-200"
      >
        <FormInput
          text="Nama Kategori"
          name="Name"
          tipe="text"
          register={register}
          error={errors.Name?.message}
          placeholder="Masukkan nama kategori"
        />

        <div className="flex justify-end">
          <Button
            label="Simpan Kategori"
            variant="primary"
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          />
        </div>
      </form>
    </div>
  );
}
