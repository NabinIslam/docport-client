import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const HomeContactForm = () => {
  return (
    <form className="flex flex-col gap-4 max-w-md mx-auto my-5">
      <div>
        <TextInput
          name="email"
          type="email"
          placeholder="Email"
          required={true}
        />
      </div>
      <div>
        <TextInput
          name="subject"
          type="text"
          placeholder="Subject"
          required={true}
        />
      </div>

      <div>
        <Textarea name="message" placeholder="Message" required rows={5} />
      </div>

      <Button
        className="bg-gradient-to-r from-primary to-secondary border-0"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default HomeContactForm;
