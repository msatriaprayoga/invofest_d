import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/FormInput";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/Button";

interface EventProps {
  Nama: string;
  Category: string;
  Location: string;
  Date: string;
  Description: string;
}

const schema = z.object({
  Nama: z.string().min(3, "Nama event minimal 3 karakter"),
  Category: z.string().min(3, "Kategori minimal 3 karakter"),
  Location: z.string().min(3, "Lokasi minimal 3 karakter"),
  Date: z.string().min(1, "Tanggal wajib diisi"),
  Description: z.string().min(10, "Deskripsi minimal 10 karakter"),
});

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventProps>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: EventProps) => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-red-600">
        Create New Event
      </h1>
      <p className="mb-6 text-gray-600">
        Lengkapi form berikut untuk menambahkan event baru.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white shadow-lg rounded-xl p-8 border border-gray-200"
      >
        <FormInput
          text="Nama Event"
          name="Nama"
          tipe="text"
          register={register}
          error={errors.Nama?.message}
          placeholder="Masukkan nama event"
        />

        <FormInput
          text="Kategori"
          name="Category"
          tipe="text"
          register={register}
          error={errors.Category?.message}
          placeholder="Contoh: Seminar, Workshop"
        />

        <FormInput
          text="Lokasi"
          name="Location"
          tipe="text"
          register={register}
          error={errors.Location?.message}
          placeholder="Masukkan lokasi"
        />

        <FormInput
          text="Tanggal"
          name="Date"
          tipe="date"
          register={register}
          error={errors.Date?.message}
        />

        <FormInput
          text="Deskripsi"
          name="Description"
          tipe="text"
          register={register}
          error={errors.Description?.message}
          placeholder="Masukkan deskripsi"
        />

        <div className="flex justify-end">
          <Button
            label="Simpan Event"
            variant="primary"
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          />
        </div>
      </form>
    </div>
  );
}
