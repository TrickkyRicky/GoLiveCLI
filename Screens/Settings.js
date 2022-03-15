import {ScrollView, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {HStack, VStack, Text, Heading, Box, Divider} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <VStack bg="#1f1f1f" flex={1}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <Text color="#35C280" fontSize="sm" mt={2} mb={1} ml={3}>
            Account Settings
          </Text>

          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon2 name="md-person-circle" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Profile
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>
          <Divider w={'100%'} bg="#1F1F1F" />
          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon2 name="md-document-text" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Account Information
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>

          <Text color="#35C280" fontSize="sm" mt={4} mb={1} ml={3}>
            Contact Details
          </Text>

          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon2 name="md-mail" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Email Address
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>
          <Divider w={'100%'} bg="#1F1F1F" />
          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon name="phone" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Phone Number
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>

          <Text color="#35C280" fontSize="sm" mt={4} mb={1} ml={3}>
            Security Settings
          </Text>

          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon2 name="md-lock-open" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Password Reset
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>
          <Divider w={'100%'} bg="#1F1F1F" />
          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon name="user-secret" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Face ID and PIN
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>

          <Text color="#35C280" fontSize="sm" mt={4} mb={1} ml={3}>
            App Settings
          </Text>

          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon name="bell" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Notifications
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>

          <Text color="#35C280" fontSize="sm" mt={4} mb={1} ml={3}>
            General
          </Text>

          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon2 name="md-help-circle" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Help and Feedback
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>
          <Divider w={'100%'} bg="#1F1F1F" />
          <TouchableOpacity onPress={() => null}>
            <Box bg="#323432" h={50} justifyContent="center" px={3} py={1}>
              <HStack
                alignItems="center"
                justifyContent={'space-between'}
                width={'100%'}>
                <HStack alignItems="center" space={4} ml={2}>
                  <Icon name="list-alt" size={25} color="#35C280" />
                  <Text fontSize="xl" color="#F4F4F4">
                    Contact Us
                  </Text>
                </HStack>

                <Arrow name="right" size={20} color="#CCC" />
              </HStack>
            </Box>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Settings;
