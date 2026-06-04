interface Props {

    value?: string;

    onChange: (
        file: File
    ) => void;

}

export default function MenuImageUpload({
    onChange,
}: Props) {

    return (

        <input
            type="file"
            accept="image/*"
            onChange={(
                e
            ) => {

                const file =
                    e.target
                        .files?.[0];

                if (file) {

                    onChange(
                        file
                    );

                }

            }}
        />

    );

}