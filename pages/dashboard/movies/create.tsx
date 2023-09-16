import DashboardLayout from "@/components/DashboardLayout";
import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

interface CreateMoviesProps {}

const CreateMovies: React.FC<CreateMoviesProps> = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
   console.log(data);
  };
  

  return (
    <DashboardLayout title="Create Movie">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col w-[50%] bg-white shadow rounded-lg text-black p-5 gap-5"
        >
          <InputComponent label="Movie Name" name="movie_name" />
          <InputComponent label="Star" name="star" type="number" />
          <hr />
          <Button type="submit">Save</Button>
        </form>
      </FormProvider>
    </DashboardLayout>
  );
};

export default CreateMovies;
