import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/FormInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/Button";

interface SpeakerCardProps {
  Name: string;
  Role: string;
  ImageUrl: string;
}

const schema = z.object({
  Name: z.string().min(3, "Nama speaker minimal 3 karakter"),
  Role: z.string().min(3, "Role minimal 3 karakter"),
  ImageUrl: z.string().url("URL gambar tidak valid"),
});

export default function CreateSpeaker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpeakerCardProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SpeakerCardProps) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-700">
        Create New Speaker
      </h1>
      <p className="mb-6 text-gray-600">
        Lengkapi form berikut untuk menambahkan speaker baru.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white shadow-lg rounded-xl p-8 border border-gray-200"
      >
        <FormInput
          text="Nama Speaker"
          name="Name"
          tipe="text"
          register={register}
          error={errors.Name?.message}
          placeholder="Masukkan nama"
        />

        <FormInput
          text="Role / Jabatan"
          name="Role"
          tipe="text"
          register={register}
          error={errors.Role?.message}
          placeholder="Masukkan role atau jabatan"
        />

        <FormInput
          text="Image URL"
          name="ImageUrl"
          tipe="text"
          register={register}
          error={errors.ImageUrl?.message}
          placeholder="Masukkan URL gambar"
        />

        <div className="flex justify-end">
          <Button
            label="Simpan Speaker"
            variant="primary"
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          />
        </div>
      </form>
    </div>
  );
}
