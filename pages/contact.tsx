import { Box, Grid, TextField, Typography } from "@mui/material";

export default function contact() {
  return (
    <Box className="h-screen bg-bg">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          check 1
        </Grid>
        <Grid
          item
          xs={8}
          py={5}
          px={2}
          border={1}
          borderRadius={2}
          className="bg-formContainer"
          sx={
            {
              // bgcolor: "#1F2937",
            }
          }
        >
          {/* <Typography
            component="h1"
            textAlign="center"
            className="text-buttonText text-7xl"
          >
            be with me
          </Typography> */}
          <h1 className="text-buttonText xl:text-5xl text-xl font-bold text-center py-4">
            be with me...
          </h1>
          <Box display="flex" justifyContent="space-evenly">
            <input
              type="text"
              name="name"
              //   {...register("name", {
              //     required: { value: true, message: "Please enter your name" },
              //     maxLength: {
              //       value: 30,
              //       message: "Please use 30 characters or less",
              //     },
              //   })}
              className="border-2 rounded-xl border-borderColor form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
              placeholder="Name"
            ></input>
            <input
              type="text"
              name="name"
              //   {...register("name", {
              //     required: { value: true, message: "Please enter your name" },
              //     maxLength: {
              //       value: 30,
              //       message: "Please use 30 characters or less",
              //     },
              //   })}
              className="border-2 rounded-xl border-borderColor form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
              placeholder="Name"
            ></input>
          </Box>
          <Box>
            <input
              type="text"
              name="subject"
              //   {...register("subject", {
              //     required: { value: true, message: "Please enter a subject" },
              //     maxLength: {
              //       value: 75,
              //       message: "Subject cannot exceed 75 characters",
              //     },
              //   })}
              className="border-2 rounded-xl border-sky-300 form-control text-[#8892B0] focus:text-[#8892B0] formInput focus:bg-[#0A182E] bg-[#0A182E]"
              placeholder="Subject"
            ></input>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
