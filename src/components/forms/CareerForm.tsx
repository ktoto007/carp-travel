import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "./Label";
import Input from "./Input";
import Paragraf from "@/components/Paragraf";
import Span from "@/components/Span";
import ErrorMes from "./ErrorMes";
import Button from "./Button";

type CareerForm = {
  fullname: string;
  email: string;
  position: string;
  phone: string;
  message?: string;
  confirm: boolean;
};

export default function CareerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CareerForm>({
    defaultValues: {
      fullname: "",
      email: "",
      position: "",
      phone: "",
      message: "",
      confirm: false,
    },
  });
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prevstate) => !prevstate);
  };

  useEffect(() => {
    const checkbox = document.getElementById("customCheckbox");
    checkbox?.classList.toggle("bg-unchecked");
    checkbox?.classList.toggle("bg-checked");
  }, [checked]);

  const onSubmit: SubmitHandler<CareerForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tab:flex tab:items-end tab:gap-[20px] pc:gap-[24px]"
    >
      <div className="tab:w-[222px]">
        <Paragraf classes="w-[179px] mob:ml-auto tab:mb-[40px] tab:w-auto">
          <Span classes="font-[200]">Don't miss your opportunity!</Span>
          <br />
          <Span classes="font-[200]">
            Fill out the form right now and join our team!
          </Span>
        </Paragraf>
        <Label label="Full name" classes="mb-[16px] text-black">
          <Input
            classes={errors.fullname ? "text-[#FF5757]" : ""}
            type="text"
            placeholder="John Smith"
            some={register("fullname", { required: true })}
          />
        </Label>
        {errors.fullname && <ErrorMes>This field is required</ErrorMes>}
        <Label label=" E-mail" classes="mb-[16px]">
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

        <Label label="Position" classes="mb-[16px]">
          <Input
            classes={errors.position ? "text-[#FF5757]" : ""}
            type="text"
            placeholder="Movie maker"
            some={register("position", { required: true })}
          />
        </Label>
        {errors.position && <ErrorMes>This field is required</ErrorMes>}

        <Label label="Phone" classes="mb-[16px]">
          <Input
            classes={errors.phone ? "text-[#FF5757]" : ""}
            type="tel"
            placeholder="+38 (097) 12 34 567"
            some={register("phone", {
              required: true,
              pattern: /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            })}
          />
        </Label>

        {errors.phone && <ErrorMes>Invalid number</ErrorMes>}

        <Label label="Message" classes="mb-[16px] tab:hidden">
          <textarea
            className="w-[100%] h-[196px]  bg-white bg-opacity-5"
            {...register("message")}
          />
        </Label>

        <label className="flex text-white mob:mb-[16px] block text-[12px] font-[200] leading-[22px] ">
          <input
            type="checkbox"
            className="appearance-none"
            {...register("confirm", { required: true })}
            onClick={toggleChecked}
          />
          <span
            id="customCheckbox"
            className="block w-[22px] h-[22px] p-[3px] bg-unchecked bg-clip-content  border-white  border-[1px] mr-[8px] tab:w-[26px]"
          />
          I confirm my consent to the processing of personal data.
        </label>

        {errors.confirm && <ErrorMes>This field is required</ErrorMes>}
      </div>
      <div>
        <Label
          label="Message"
          classes="mob:hidden tab:mb-[9px] tab:w-[221px] pc:mb-[24px]"
        >
          <textarea
            className="w-[100%] h-[228px]  bg-white bg-opacity-5"
            {...register("message")}
          />
        </Label>

        <Button />
      </div>
    </form>
  );
}
