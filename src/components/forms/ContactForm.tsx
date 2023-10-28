import { useForm, SubmitHandler } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import ErrorMes from "./ErrorMes";
import Button from "./Button";

type ContactForm = {
  fullname: string;
  email: string;
  message?: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tab:flex tab:gap-[20px] pc:flex-col"
    >
      <div className="mb-[16px] tabM:w-[221px] pc:flex pc:gap-[20px] ">
        <Label label="Full name" classes="mb-[16px] text-black pc:w-[293px]">
          <Input
            classes={errors.fullname ? "text-[#FF5757]" : ""}
            type="text"
            placeholder="John Smith"
            some={register("fullname", { required: true })}
          />
        </Label>
        {errors.fullname && <ErrorMes>This field is required</ErrorMes>}
        <Label label=" E-mail" classes="pc:w-[293px]">
          <Input
            classes={errors.email ? "text-[#FF5757]" : ""}
            type="email"
            placeholder="johnsmith@email.com"
            some={register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
        </Label>
        {errors.email && <ErrorMes>Invalid email</ErrorMes>}
      </div>

      <div className="tab:w-[463px] pc:w-[607px]">
        <Label label="Message" classes="mb-[16px]">
          <textarea
            className="w-[100%] h-[193px] bg-white bg-opacity-5"
            {...register("message")}
          />
        </Label>
        <Button />
      </div>
    </form>
  );
}
