-[x] (24/02/26): I have created the process indicator layout

-[x] 26/02/26: Create the Box layout where the button to upload a file is placed

-[x] 27/02/26: I have created a component  FileUploader, where it renders the button to 
upload the web-clock. In this component I have all the states that verifies if the file
has been uploaded, the button state and reference that checks if the user clicked on the button to open the window to select the image. In this component I am also connection to GEMINI and sending the image for analyses. However, the process of the upload, which it is the steps, is out of this component. It is the parent component. I need to check how to update this component after GEMINI return the result. Maybe creating a middleware or creating another service? I need to study the best architecture for this.