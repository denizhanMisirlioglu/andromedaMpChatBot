// List.tsx
import React, { FC } from 'react';
import { Box, SimpleGrid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
    apps: string[];
    chainId: string;
}

const EmbeddableList: FC<Props> = (props) => {
    const { apps, chainId } = props;

    return (
        <Box py='48px'>
            <SimpleGrid columns={2} spacing={6}>
                {apps.map(app => (
                    <GridItem as={Link} href={`/app/${app}`} key={app} p='4' rounded="xl" bg='gray.100' textTransform="uppercase" fontWeight='bold'>
                        {app}
                    </GridItem>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default EmbeddableList;
