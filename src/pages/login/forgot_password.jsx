import React, { Suspense } from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Link,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "../components/Image";
import forgotPassword from "../../assets/images/forgot-password.png";
import IconifyIcon from "../components/IconifyIcon";
import logo from "../../assets/logo/elegant-logo.png";

export const ForgotPassword = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#ffeaea",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        bgcolor="background.paper"
        boxShadow={(theme) => theme.shadows[3]}
        height={560}
        width={{ md: 960 }}
      >
        <Stack width={{ md: 0.5 }} m={2.5} gap={10}>
          <Link href="/" width="fit-content">
            <Image src={logo} width={82.6} />
          </Link>
          <Stack alignItems="center" gap={6.5} width={330} mx="auto">
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              Forgot Password
            </Typography>
            <FormControl variant="standard" fullWidth>
              <TextField
                placeholder="Enter your email"
                id="email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconifyIcon
                        icon="ic:baseline-email"
                        width={"20px"}
                        height={"20px"}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Button variant="contained" fullWidth>
              Send Code
            </Button>
            <Typography variant="body2" color="text.secondary">
              Back to{" "}
              <Link
                href="/authentication/login"
                underline="hover"
                fontSize={(theme) => theme.typography.body1.fontSize}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        </Stack>
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              height={1}
              width={1}
              sx={{ bgcolor: "primary.main" }}
            />
          }
        >
          <Image
            src={forgotPassword}
            sx={{
              width: 0.5,
              display: { xs: "none", md: "block" },
            }}
          />
        </Suspense>
      </Stack>
    </div>
  );
};
