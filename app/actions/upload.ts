"use server";
import { createClient } from "../utils/server";

export const uploadFile = async (formData: FormData) => {
  const supabase = await createClient();

  const bucket = "food";
  const file = formData.get("food") as File;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(file.name, file);

  if (error) {
    console.log(error);
  } else {
    console.log(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${data.path}`
    );
  }
};
