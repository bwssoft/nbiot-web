'use server'

import { revalidatePath } from "next/cache";

export const revalidate = (path: string, formData: FormData) => revalidatePath(path);
