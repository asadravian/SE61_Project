def handle_uploaded_files(file):
    with open('files/files/' + file.name, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)


