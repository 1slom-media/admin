import PropTypes from "prop-types";
import numeral from "numeral";
import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const CheckoutOrderSummary = (props) => {
  const { t } = useTranslation("translation");
  const { onQuantityChange, products, shippingTax, subtotal, total, ...other } =
    props;

  return (
    <Card variant="outlined" sx={{ p: 3 }} {...other}>
      <Typography variant="h6">{t("OrderSummary")}</Typography>
      <List sx={{ mt: 2 }}>
        {products.map((product) => (
          <ListItem disableGutters key={product.id}>
            <ListItemAvatar sx={{ pr: 2 }}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  height: 100,
                  justifyContent: "center",
                  overflow: "hidden",
                  width: 100,
                  "& img": {
                    width: "100%",
                    height: "auto",
                  },
                }}
              >
                <img alt={product.name} src={product.image} />
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ fontWeight: "fontWeightBold" }}
                  variant="subtitle2"
                >
                  {product.name}
                </Typography>
              }
              secondary={
                <Typography
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body1"
                >
                  ${numeral(product.price).format("00.00")}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <FormControl size="small" variant="outlined">
                <Select
                  value={product.quantity}
                  onChange={(event) => onQuantityChange?.(event, product.id)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        placeholder={t("DiscountCode")}
        size="small"
        sx={{ mt: 2 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button type="button">{t("ApplyCoupon")}</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography variant="subtitle2">{t("Subtotal")}</Typography>
        <Typography variant="subtitle2">
          ${numeral(subtotal).format("00.00")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography variant="subtitle2">{t("ShippingTax")}</Typography>
        <Typography variant="subtitle2">
          ${numeral(shippingTax).format("00.00")}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">{t("Total")}</Typography>
        <Typography variant="subtitle2">
          ${numeral(total).format("00.00")}
        </Typography>
      </Box>
    </Card>
  );
};

CheckoutOrderSummary.propTypes = {
  onQuantityChange: PropTypes.func,
  products: PropTypes.array,
  shippingTax: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

CheckoutOrderSummary.defaultProps = {
  products: [],
  shippingTax: 0,
  subtotal: 0,
  total: 0,
};
