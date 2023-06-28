import { IMarketplaceCollection } from "@/lib/app/types";
import { useGetTokenMarketplaceInfo } from "@/lib/graphql/hooks/marketplace";
import { MoreHorizontalIcon } from "@/theme/icons";
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react"

interface Props {
    collection: IMarketplaceCollection;
    tokenId: string;
}

const Cw721MarketplaceState: FC<Props> = (props) => {
    const { collection, tokenId } = props;
    const { data: marketplace } = useGetTokenMarketplaceInfo(
        collection.cw721,
        collection.marketplace,
        tokenId
    );

    return (
        <Flex justify="space-between" align="start" gap="2">
            <Box>
                <Text fontSize="xs" textStyle="light">
                    Price
                </Text>
                <Text fontWeight="medium" fontSize="xs">
                    {marketplace?.latestSaleState.price ?? 0} {marketplace?.latestSaleState.coin_denom}
                </Text>
            </Box>
            <Box>
                <>&nbsp;</>
            </Box>
            <Menu placement="bottom-end">
                <MenuButton
                    as={IconButton}
                    icon={<MoreHorizontalIcon width={16} />}
                    variant="link"
                    alignSelf="end"
                />
                <MenuList>
                    <MenuItem>Burn</MenuItem>
                    <MenuItem>Archive</MenuItem>
                    <MenuItem>Sell</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default Cw721MarketplaceState