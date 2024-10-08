import { Box, Button, Group, SimpleGrid, Stack, Text } from "@mantine/core";
import { useStateHistory } from "@mantine/hooks";
import { Skin } from "../../types/types";
import { useState } from "react";

export const SkinEditor = () => {
    const [skin, handlers] = useStateHistory<Skin>({
        layers: [{
            data: new ImageData(64, 64),
            label: `layer0`,
        }],
    });

    const [activeLayer, setActiveLayer] = useState(0);

    const addLayer = () => {
        handlers.set({
            ...skin,
            layers: [{
                data: new ImageData(64, 64),
                label: `layer${skin.layers.length}`,
            }, ...skin.layers],
        });
    };

    return (
        <Box h="calc(100vh - var(--app-shell-header-height)">
            <SimpleGrid cols={3}>
                <Stack>
                    <Button
                        variant="light"
                        onClick={addLayer}
                    >
                        Create new layer
                    </Button>

                    {skin.layers.map((layer, i) => (
                        <Stack
                            key={i}
                            className="hoverable"
                            onClick={() => setActiveLayer(i)}
                        >
                            <Group>
                                <Text>{layer.label}</Text>
                            </Group>
                        </Stack>
                    ))}
                </Stack>

                <Stack>
                    meow
                </Stack>

                <Stack>
                    meow
                </Stack>
            </SimpleGrid>
        </Box>
    )
};
