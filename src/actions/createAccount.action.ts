"use server"

export async function createAccount(
    // prevState: {
    //   message: string;
    // },
    // formData: FormData,
  ) {
    //console.log(formData);
    try {
      return { message: `Added todo ` };
    } catch (e) {
      return { message: "Failed to create todo" };
    }
  }