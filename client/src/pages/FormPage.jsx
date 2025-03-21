import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const formSchema = z.object({
  question_1: z.string().min(1, "Can you describe how regular your menstrual cycle is and how many days it usually lasts?"),
  question_2: z.string().min(1, "What symptoms do you typically experience before or during your period, and how do they affect you?"),
  question_3: z.string().min(1, "How many days does your period usually last, and do you notice any changes from month to month?"),
  question_4: z.string().min(1, "How would you describe the level of pain or discomfort you feel during your period?"),
  question_5: z.string().min(1, "What kinds of products, treatments, or coping strategies do you use to manage your period symptoms?"),
  boolean_1: z.boolean(),
  boolean_2: z.boolean(),
});

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question_1: "",
      question_2: "",
      question_3: "",
      question_4: "",
      question_5: "",
      boolean_1: false,
      boolean_2: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/form", data);
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Submit Your Answers</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num}>
            <label className="block font-medium mb-1">Question {num}</label>
            <input
              type="text"
              {...register(`question_${num}`)}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            {errors[`question_${num}`] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[`question_${num}`].message}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("boolean_1")} />
          <label>Agree to terms?</label>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("boolean_2")} />
          <label>Subscribe to updates?</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 mt-2">Form submitted!</p>
        )}
      </form>
    </div>
  );
};

export default FormPage;