import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"


const CardDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
    return (
        <Dialog
            open={isDialogOpen}
            onClose={onChangeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to delete this card?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    this operation will completely delete the business card and all its data drom the databace for good!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onChangeDialog} color="error">
                    cancel
                </Button>
                <Button onClick={onDelete} autoFocus color="info">
                    Delete Card
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default CardDeleteDialog;